import { FolderComponent } from './folder/folder.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderComponent)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'Entrada-de-produtos',
    loadChildren: () => import('./Entrada-de-produtos/Entrada-de-produtos.module').then( m => m.EntradaDeProdutosPageModule)
  },
  {
    path: 'acesso',
    loadChildren: () => import('./acesso/acesso.module').then( m => m.AcessoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
