import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";
import { AuthService } from "../auth/auth.service";
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpRequest
} from "@angular/common/http";
import { Recipe } from "../recipes/recipe.model";

@Injectable()
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    // const headers = new HttpHeaders().set('Authorization', 'Bearer afaaasdfll');

    // return this.http.put(
    //   "https://ng-udemy-http-f28d1.firebaseio.com/recipes.json?auth=" + token,
    //   this.recipeService.getRecipes(),
    //   {
    //     observe: "body",
    //     params: new HttpParams()
    //     // headers:
    //   }
    // );
    const req = new HttpRequest(
      "PUT",
      "https://ng-udemy-http-f28d1.firebaseio.com/recipes.json",
      this.recipeService.getRecipes(),
      {
        reportProgress: true
      }
    );
    return this.http.request(req);
  }

  getRecipes() {
    // this.http
    //   .get<Recipe[]>(
    //     "https://ng-udemy-http-f28d1.firebaseio.com/recipes.json?auth=" + token
    //   )
    this.http
      .get<Recipe[]>(
        "https://ng-udemy-http-f28d1.firebaseio.com/recipes.json"
        // {
        //   observe: "body",
        //   responseType: "text"
        // }
      )
      .subscribe(recipes => {
        // this.recipeService.setRecipes(recipes);
        console.log("Response", recipes);
      });
  }
}
