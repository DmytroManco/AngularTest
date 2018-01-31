import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-bool',
  templateUrl: './bool.component.html',
  styleUrls: ['./bool.component.scss']
})
export class BoolComponent implements OnInit {
  @Input() public parentForm: FormGroup;
  @Input() public formGroupName: string;
  @Input() public formValue: string;
  @Input() public formType: string;
  @Input() public formLabel: string;

  constructor(private fb: FormBuilder) {
  }

  public ngOnInit() {
    this.parentForm.addControl(this.formGroupName, this.fb.group({
      string: this.formValue
    }));
  }
}
