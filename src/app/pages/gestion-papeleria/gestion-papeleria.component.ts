import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Producto } from 'src/app/domain/producto';
import { PapeleriaService } from 'src/app/service/papeleria.service';

@Component({
  selector: 'app-gestion-papeleria',
  templateUrl: './gestion-papeleria.component.html',
  styleUrls: ['./gestion-papeleria.component.css']
})
export class GestionPapeleriaComponent implements OnInit {

  lstProductos = new Array()

  dataSource = new MatTableDataSource(this.lstProductos);
  
  displayedColumns: string[] = ['Nombre', 'Precio Unitario', 'Stock', 'Descripcion'];

  producto: Producto = new Producto()

  productos:any

  constructor(private router: Router, private papeleriaService: PapeleriaService ) {}

  ngOnInit(): void {
    this.loadProductos()
  }

  loadProductos(){
    this.productos = this.papeleriaService.getAllClientes()
    console.log(this.producto)
    this.productos.subscribe((data: any) => {
      console.log("data", data)
      this.dataSource = data
    })
  }

  guardar(){
    console.log(this.producto)
    this.papeleriaService.save(this.producto).subscribe(data =>{
      console.log(data)
      this.loadProductos()
      this.limpiar()
    })
  }

  limpiar(){
    this.producto.nombre='';
    this.producto.precioUnitario=0.00;
    this.producto.stock=0;
    this.producto.descripcion='';
  }
}
