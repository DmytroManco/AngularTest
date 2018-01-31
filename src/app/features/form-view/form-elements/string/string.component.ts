import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StringComponent implements OnInit {
  @Input() public parentForm: FormGroup;
  @Input() public formGroupName: string;
  @Input() public formValue: string;
  @Input() public formLabel: string;
  @Input() public formType: string;

  constructor(private fb: FormBuilder) {
  }

  public ngOnInit() {
    this.parentForm.addControl(this.formGroupName, this.fb.group({
      string: this.formValue
    }));
  }
}
