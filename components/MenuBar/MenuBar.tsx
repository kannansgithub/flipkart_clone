import { MenuItems } from '../../configs/MenuItems';
import Card from './Card/Card';

const MenuBar = () => {
  return (
    <div className="relative w-full h-36 bg-white">
      <div className="flex justify-between w-full p-4">
        {MenuItems.map((menu, index) => {
          return <Card title={menu.name} imageUrl={menu.imgUrl} key={index} />;
        })}
      </div>
    </div>
  );
};

export default MenuBar;
