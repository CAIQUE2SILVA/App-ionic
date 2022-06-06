import { EntradaDeProdutosComponent } from './Entrada-de-produtos/entrada-de-produtos.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FolderComponent } from './folder/folder.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AcessoComponent } from './acesso/acesso.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder',
    pathMatch: 'full'
  },
  {path:'folder', component: FolderComponent},

  {path:'cadastro', component: CadastroComponent},

  {path:'entrada-de-produtos', component:EntradaDeProdutosComponent},

  {path:'acesso', component: AcessoComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
