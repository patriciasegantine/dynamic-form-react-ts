import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from "./layouts/DefaultLayout/DefaultLayout";
import { Home } from "./View/Home/Home";
import { DynamicFormCreatePage } from "./View/DynamicFormCreatePage/DynamicFormCreatePage";
import { DynamicFormShowPage } from "./View/DynamicFormShowPage/DynamicFormShowPage";
import { RouterEnum } from "./@enum/RouterEnum";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route
          path={RouterEnum.Home}
          element={<Home/>}/>
        <Route
          path={RouterEnum.CreateDynamicForm}
          element={<DynamicFormCreatePage/>}/>
        <Route
          path={RouterEnum.ShowDynamicForm}
          element={<DynamicFormShowPage/>}/>
      </Route>
    </Routes>
  )
};
