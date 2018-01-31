import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-integer',
  templateUrl: './integer.component.html',
  styleUrls: ['./integer.component.scss']
})
export class IntegerComponent implements OnInit {
  @Input() public parentForm: FormGroup;
  @Input() public formGroupName: string;
  @Input() public formValue: string;
  @Input() public formLabel: string;

  constructor(private fb: FormBuilder) {
  }

  public ngOnInit() {
    this.parentForm.addControl(this.formGroupName, this.fb.group({
      integer: this.formValue
    }));
  }
}
