
import { Route, Routes } from 'react-router-dom';
import LayoutWebsite from '@/pages/(website)/layout';
import HomePage from '@/pages/(website)/home/page';
import AboutPage from '@/pages/(website)/about/page';
import ProductsPage from '@/pages/(website)/products/page';
import LayoutAdmin from '@/pages/(dashboard)/layout';
import CategoryAdminPage from '@/pages/(dashboard)/category/page';
import ProductsAdminPage from '@/pages/(dashboard)/products/page';
import UsersAdminpage from './../pages/(dashboard)/users/page';
import DashboardPage from '@/pages/(dashboard)/dashboard/page';
const Router = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<LayoutWebsite/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path='/about' element={<AboutPage/>}/>
                    <Route path='/products' element={<ProductsPage/>}/>
                </Route>

                <Route path='/admin' element={<LayoutAdmin/>}>
                    <Route index element={<DashboardPage/>}/>
                    <Route path='category' element={<CategoryAdminPage/>}/>
                    <Route path='products' element={<ProductsAdminPage/>}/>
                    <Route path='users' element={<UsersAdminpage/>}/>

                </Route>
            </Routes>
        </>
    );
};

export default Router;
