import React,{useEffect} from 'react'
import Mobile_menu from '../components/Navbar/Mobile_menu';


const MenuNav = () => {
  useEffect(() => {
    const init = async () => {
        const M = await import('materialize-css');
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);
    };
    init();
}, []);
    
  return (
    <Mobile_menu />
  );
};

export default MenuNav