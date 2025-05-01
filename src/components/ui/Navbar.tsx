
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navbar = () => {
  return (
    <nav className="bg-primary text-primary-foreground py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold flex items-center gap-2">
          <Icon name="MessageSquare" />
          <span>РусФорум</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" className="text-primary-foreground">
              <Icon name="Home" />
              Главная
            </Button>
          </Link>
          <Link to="/topics">
            <Button variant="ghost" className="text-primary-foreground">
              <Icon name="ListOrdered" />
              Темы
            </Button>
          </Link>
          <Link to="/users">
            <Button variant="ghost" className="text-primary-foreground">
              <Icon name="Users" />
              Пользователи
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Link to="/login">
            <Button variant="secondary" size="sm">
              Войти
            </Button>
          </Link>
          <Link to="/register">
            <Button size="sm">
              Регистрация
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
