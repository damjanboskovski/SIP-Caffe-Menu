import { NgClass } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, QueryList, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { SiteSettings } from '../../shared/classes/settings/site-settings';
import { ISiteSettings } from '../../shared/interfaces/settings/site-settings.interface';
import { DbStores } from '../../shared/enums/db/db-stores.enum';
import { Language } from '../../shared/enums/settings/languages.enum';
import { ILanguageSettings } from '../../shared/interfaces/settings/language-settings.interface';
import { DbService } from '../../shared/services/db.service';
import { TranslationHelper } from '../../shared/services/translation-helper.service';
import { DbKeys } from '../../shared/enums/db/db-keys.enum';

@Component({
  selector: 'settings',
  standalone: true,
  imports: [
    FormsModule,
    NgClass,
    TranslateModule
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent implements OnDestroy, AfterViewInit {
  @ViewChildren('settingsMenuRef') settingsMenuRefs!: QueryList<ElementRef>;
  
  protected settings: ISiteSettings = new SiteSettings();

  protected initialized: boolean = false;

  private unsubscribe$ = new Subject<void>();

  protected menuOpen: boolean = false;

  constructor(
    private dbService: DbService,
    private translationHelper: TranslationHelper
  ) {
  }

  ngAfterViewInit(): void {
    this.InitializeSettings();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private async InitializeSettings(): Promise<void> {
    await this.dbService.fetchData(DbStores.WEBSITE_SETTINGS, DbKeys.language).then((language: string) => {
      if (language) {
        this.settings.language = JSON.parse(language) as ILanguageSettings;
        this.settings.language.state = false;
        this.translationHelper.setDefaultLang(this.settings.language.selected);
      }
      this.initialized = true;
    });
  }

  private async saveSetting(key: DbKeys, value: any): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        await this.dbService.saveData(DbStores.WEBSITE_SETTINGS, key, JSON.stringify(value));
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  protected async setLanguage(language: Language): Promise<void> {
    this.settings.language.selected = language;
    this.translationHelper.changeLanguage(language);
    await this.saveSetting(DbKeys.language, this.settings.language);
  }

  protected toggleLanguageSettingState(): void {
    this.settings.language.state = !this.settings.language.state;
  }

  protected toggleSettingsMenu(event: Event): void {
    event.stopPropagation(); 
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('document:click', ['$event'])
  protected onClickOutside(event: Event): void {
    if (this.menuOpen && this.settingsMenuRefs.first && !this.settingsMenuRefs.first.nativeElement.contains(event.target)) {
      this.menuOpen = false;
    }
  }
}