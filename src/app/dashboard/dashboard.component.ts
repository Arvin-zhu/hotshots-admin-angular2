/**
 * Created by yitala on 2016/11/25.
 */
import {Component, OnInit} from '@angular/core';
import {Hero} from "../heroes/hero/Hero";
import {HeroService} from "../heroes/hero/hero.service";

@Component({
    selector:'my-dashboard',
    templateUrl:'./dashboard.component.html',
    styleUrls:['./dashboard.component.css']
})

export class DashboardComponent implements OnInit{

    heroes:Hero[] = [];

    constructor(private heroService:HeroService){
    }

    ngOnInit(): void {
        console.log("进入dashboard");
        this.heroService.getHeroes()
            .then(heroes=>this.heroes = heroes.slice(1,5));
    }

}