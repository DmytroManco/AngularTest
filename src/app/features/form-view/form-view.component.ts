import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import { FORM_LINK } from '../features.config';
import { ResponseModel, FormModel, FormViewModel, ResponseViewModel } from '../../shared';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormViewComponent implements OnInit, OnDestroy {
  public formInfo: FormModel;
  public formView: FormViewModel[];
  public formId: number;
  public form: FormGroup = new FormGroup({});

  private subscriptions: Subscription[] = [];

  constructor(private http: HttpClient,
              private route: ActivatedRoute) {
  }

  public ngOnInit() {
    this.subscriptions.push(this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.formId = Number(params.get('id'));

        return this.http.get(`${FORM_LINK}/${this.formId}`);
      })
      .subscribe((data: ResponseViewModel) => {
        this.formView = data.data;
        this.getFormInfo();
      }));
  }

  public ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }

  private getFormInfo(): void {
    this.subscriptions.push(this.http.get(FORM_LINK)
      .subscribe((data: ResponseModel) => {
        this.formInfo = data.data.find((item: FormModel) => item.id === this.formId);
      }));
  }
}
