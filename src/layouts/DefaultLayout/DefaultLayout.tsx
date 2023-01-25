import { Outlet } from 'react-router-dom';
import { LayoutContainer } from './DefaultLayout.styles';
import { Footer } from '../../components/Footer/Footer';
import { Header } from "../../components/Header/Header";

export const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <Header/>
      <Outlet/>
      <Footer/>
    </LayoutContainer>
  )
}
