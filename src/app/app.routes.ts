import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { NonalcoholicPageComponent } from './components/pages/nonalcoholic-page/nonalcoholic-page.component';
import { AlcoholicPageComponent } from './components/pages/alcoholic-page/alcoholic-page.component';
import { LocationPageComponent } from './components/pages/location-page/location-page.component';
import { CoffePageComponent } from './components/pages/coffe-page/coffe-page.component';
import { NocoffePageComponent } from './components/pages/nocoffe-page/nocoffe-page.component';
import { WaterPageComponent } from './components/pages/water-page/water-page.component';
import { ScjuicePageComponent } from './components/pages/scjuice-page/scjuice-page.component';
import { SodaPageComponent } from './components/pages/soda-page/soda-page.component';
import { BeerPageComponent } from './components/pages/beer-page/beer-page.component';
import { BrandyPageComponent } from './components/pages/brandy-page/brandy-page.component';
import { CognacPageComponent } from './components/pages/cognac-page/cognac-page.component';
import { RumPageComponent } from './components/pages/rum-page/rum-page.component';
import { LikerPageComponent } from './components/pages/liker-page/liker-page.component';
import { DegistivePageComponent } from './components/pages/degistive-page/degistive-page.component';
import { OtherPageComponent } from './components/pages/other-page/other-page.component';
import { WhiskeyPageComponent } from './components/pages/whiskey-page/whiskey-page.component';
import { VodkaPageComponent } from './components/pages/vodka-page/vodka-page.component';
import { GinPageComponent } from './components/pages/gin-page/gin-page.component';
import { VermuthPageComponent } from './components/pages/vermuth-page/vermuth-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
    },
    {
        path: 'nonalcoholic-page',
        component: NonalcoholicPageComponent,
    },
    {
        path: 'alcoholic-page',
        component: AlcoholicPageComponent,
    },
    {
        path: 'location-page',
        component: LocationPageComponent,
    },
    {
        path: 'coffe-page',
        component: CoffePageComponent,
    },
    {
        path: 'nocoffe-page',
        component: NocoffePageComponent,
    },
    {
        path: 'water-page',
        component: WaterPageComponent,
    },
    {
        path: 'scjuice-page',
        component: ScjuicePageComponent,
    },
    {
        path: 'soda-page',
        component: SodaPageComponent,
    },
    {
        path: 'beer-page',
        component: BeerPageComponent,
    },
    {
        path: 'brandy-page',
        component: BrandyPageComponent,
    },
    {
        path: 'cognac-page',
        component: CognacPageComponent,
    },
    {
        path: 'rum-page',
        component: RumPageComponent,
    },
    {
        path: 'liker-page',
        component: LikerPageComponent,
    },
    {
        path: 'degistive-page',
        component: DegistivePageComponent,
    },
    {
        path: 'other-page',
        component: OtherPageComponent,
    },
    {
        path: 'whiskey-page',
        component: WhiskeyPageComponent,
    },
    {
        path: 'vodka-page',
        component: VodkaPageComponent,
    },
    {
        path: 'gin-page',
        component: GinPageComponent,
    },
    {
        path: 'vermuth-page',
        component: VermuthPageComponent,
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes, {useHash: false})],
    exports:[RouterModule],
})
export class AppRoutingModule{}
