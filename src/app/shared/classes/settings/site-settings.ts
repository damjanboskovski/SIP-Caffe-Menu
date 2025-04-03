import { ILanguageSettings } from "../../interfaces/settings/language-settings.interface";
import { ISiteSettings } from "../../interfaces/settings/site-settings.interface";
import { LanguageSettings } from "./language-settings";

export class SiteSettings implements ISiteSettings {
    language: ILanguageSettings; 

    constructor(value?: ISiteSettings) {
        this.language = new LanguageSettings(value?.language);
    }
}