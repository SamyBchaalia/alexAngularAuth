import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';



import { MatGridListModule } from '@angular/material/grid-list'
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatSnackBarModule } from "@angular/material/snack-bar"
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from "@angular/material/sort"



const modules = [MatCardModule, MatInputModule, MatButtonModule, MatTableModule, MatIconModule, MatDialogModule, MatSidenavModule, MatToolbarModule, MatFormFieldModule, MatSortModule, MatPaginatorModule, MatGridListModule, MatListModule];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule { }
