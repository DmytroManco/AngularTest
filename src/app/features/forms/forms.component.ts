import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ResponseModel } from '../../shared';
import { FORM_LINK } from '../features.config';
import { FormModel } from '../../shared/models';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit, OnDestroy {
  public items: FormModel[];

  private subscriptions: Subscription[] = [];

  constructor(private http: HttpClient, private router: Router) {
  }

  public ngOnInit() {
    this.getForms();
  }

  public removeItem(index: number): void {
    this.items.splice(index, 1);
  }

  public navigateToView(id: number): void {
    this.router.navigate([`forms/${id}`]);
  }

  public ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }

  private getForms(): void {
    this.subscriptions.push(this.http.get(FORM_LINK)
      .subscribe((data: ResponseModel) => this.items = data.data));
  }
}
