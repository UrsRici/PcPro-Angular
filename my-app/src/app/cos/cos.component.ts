import { Component } from '@angular/core';

@Component({
  selector: 'app-cos',
  templateUrl: './cos.component.html',
  styleUrl: './cos.component.scss'
})
export class CosComponent {
  constructor(){
  }

  PlaseazaComanda() {
    if(this.total == 0)
      alert('Nu aveti nici un produs in cos!')
    else
    {
      alert('Comanda in valoare de ' + this.total + ' Ron a fost plasata cu succes!')
      this.DeleteAllcosUser()
    }
  }

  reload(){
    location.reload();
  }

  total = 0               //pretul total al cosului
  cosProduse:any[] = []   //toate produsele din cos de la fiecare user
  cosUser:any = []        //produsele din cos de la user-ul logat
  key:any = ''

  ngOnInit(){
    if(localStorage.getItem('key'))
    {
      const localDada = localStorage.getItem('cos')
      if(localDada != null) {
        this.cosProduse = JSON.parse(localDada);
      }
      this.key = localStorage.getItem('key');
      this.key = this.key.slice(1, -1);
      for (const elementProduse of this.cosProduse)
      {
        if(this.key == elementProduse.user)
        {
          elementProduse.pret *= elementProduse.cantitate
          elementProduse.pret = parseFloat(elementProduse.pret.toFixed(2))
          this.total += elementProduse.pret
          this.cosUser.push(elementProduse)
        }
      }
      this.total = parseFloat(this.total.toFixed(2));
    }
  }

  DeletecosProdusUser(element:any){
    const localDada = localStorage.getItem('cos')
    if(localDada != null) {
      this.cosProduse = JSON.parse(localDada);
    }
    const localcosProduse = []
    for (const elementProduse of this.cosProduse)
    {
      if(this.key != elementProduse.user || element.id != elementProduse.id)
      {
        localcosProduse.push(elementProduse)
      }
    }
    localStorage.setItem('cos', JSON.stringify(localcosProduse))
    location.reload()
  }

  DeleteAllcosUser(){
    const localDada = localStorage.getItem('cos')
    if(localDada != null) {
      this.cosProduse = JSON.parse(localDada);
    }
    this.key = localStorage.getItem('key');
    this.key = this.key.slice(1, -1);
    console.log(this.cosProduse)
    const localcosProduse = []
    for (const elementProduse of this.cosProduse) {
      if(this.key != elementProduse.user)
        localcosProduse.push(elementProduse)
    }
    console.log(this.cosProduse)
    localStorage.setItem('cos', JSON.stringify(localcosProduse))
    location.reload();
  }

  localcosProduse:any[] = []
  actualizeazaCos(valoare:any){
    if(valoare <= 99 && valoare > 0)
    {
      const localDada = localStorage.getItem('cos')

      if(localDada != null) {
        this.localcosProduse = JSON.parse(localDada);
      }
      for (let i = 0; i < this.cosProduse.length; i++)
      {
        this.localcosProduse[i].cantitate = this.cosProduse[i].cantitate
      }

      localStorage.setItem('cos', JSON.stringify(this.localcosProduse))
    }
  }
}
