import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';


const modules = [MatCardModule, MatInputModule, MatButtonModule, MatTableModule, MatIconModule, MatDialogModule];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule { }
