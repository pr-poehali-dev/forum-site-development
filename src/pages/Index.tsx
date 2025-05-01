
import Navbar from "@/components/ui/Navbar";
import { Button } from "@/components/ui/button";
import TopicCard from "@/components/TopicCard";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const mockTopics = [
  {
    id: 1,
    title: "Добро пожаловать на РусФорум!",
    author: "Администратор",
    date: "01.05.2025",
    replies: 15,
    views: 234,
    category: "Объявления",
    isNew: true,
    isHot: true,
  },
  {
    id: 2,
    title: "Правила поведения на форуме",
    author: "Модератор",
    date: "30.04.2025",
    replies: 7,
    views: 123,
    category: "Правила",
  },
  {
    id: 3,
    title: "Техническая поддержка пользователей",
    author: "Техподдержка",
    date: "28.04.2025",
    replies: 24,
    views: 312,
    category: "Помощь",
    isHot: true,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Популярные обсуждения</h1>
          <Link to="/new-topic">
            <Button className="gap-2">
              <Icon name="PlusCircle" />
              Создать тему
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {mockTopics.map((topic) => (
            <TopicCard key={topic.id} {...topic} />
          ))}
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Категории</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <CategoryCard name="Общие обсуждения" count={152} icon="Users" />
            <CategoryCard name="Техническая помощь" count={87} icon="LifeBuoy" />
            <CategoryCard name="Новости" count={43} icon="Newspaper" />
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-gray-200 py-8 px-4 mt-12">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">РусФорум</h3>
              <p className="text-gray-400">Сообщество единомышленников</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-2">Ссылки</h4>
                <ul className="space-y-1">
                  <li><Link to="/" className="text-gray-400 hover:text-white">Главная</Link></li>
                  <li><Link to="/about" className="text-gray-400 hover:text-white">О нас</Link></li>
                  <li><Link to="/topics" className="text-gray-400 hover:text-white">Темы</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Юридическая информация</h4>
                <ul className="space-y-1">
                  <li><Link to="/privacy" className="text-gray-400 hover:text-white">Конфиденциальность</Link></li>
                  <li><Link to="/terms" className="text-gray-400 hover:text-white">Условия использования</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-4 text-sm text-gray-400">
            &copy; 2025 РусФорум. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

const CategoryCard = ({ name, count, icon }: { name: string; count: number; icon: keyof typeof import("lucide-react") }) => (
  <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
    <div className="flex items-center gap-3">
      <div className="bg-primary/10 p-2 rounded-full">
        <Icon name={icon} size={24} className="text-primary" />
      </div>
      <div>
        <h3 className="font-medium">{name}</h3>
        <p className="text-sm text-gray-500">{count} тем</p>
      </div>
    </div>
  </div>
);

export default Index;
