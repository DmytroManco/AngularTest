import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-from-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public formArr: FormGroup[] = [];

  @Input() public parentForm: FormGroup;
  @Input() public formGroupName: string;
  @Input() public formValue: string[];
  @Input() public formLabel: string;

  constructor(private fb: FormBuilder) {
  }

  public ngOnInit() {
    this.makeFormArray(this.formValue, this.formArr);
    this.parentForm.addControl(this.formGroupName, new FormArray([...this.formArr]));
  }

  private makeFormGroup(value): FormGroup {
    return this.fb.group({
      string: value,
      correct: false
    });
  }

  private makeFormArray(data, arr): void {
    data.forEach((value) => {
      arr.push(this.makeFormGroup(value));
    });
  }
}
