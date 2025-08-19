import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Cart } from './cart/cart';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { ProductDetail } from './product-detail/product-detail';

import { CheckOut } from './check-out/check-out';
import { Products } from './products/products';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'cart',
        component: Cart
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'register',
        component: Register
    },
    {
        path: 'product-detail',
        component: ProductDetail
    },

    {
        path: 'check-out',
        component: CheckOut
    },
    {
        path: 'products',
        component: Products
    },


];
