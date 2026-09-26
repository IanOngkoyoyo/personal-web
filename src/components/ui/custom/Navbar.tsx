
import {
  NavigationMenu,
  NavigationMenuList,
} from '../navigation-menu';


export default function Navbar() {
  return (
    <NavigationMenu className="z-5 max-w-full mx-7">
      <NavigationMenuList>
        <div className='flex'>
          <h1> Ian Ongkoyoyo</h1>
          <p>fullstack Developer</p>
          <h1 className='mx-7'>My Project & Tools</h1>
          <h1 className='mx-7'>Testiomonial</h1>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}