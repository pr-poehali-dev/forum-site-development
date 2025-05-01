
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/ui/Navbar";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";

// Макет данных для страницы темы
const topicData = {
  id: 1,
  title: "Добро пожаловать на РусФорум!",
  author: "Администратор",
  date: "2025-05-01",
  category: "Объявления",
  content: "Приветствуем всех на нашем форуме! Это место для обсуждения различных тем, обмена опытом и поиска единомышленников. Пожалуйста, соблюдайте правила форума и уважайте других участников.",
  views: 234,
  isHot: true,
};

// Макет данных для комментариев
const commentsData = [
  {
    id: 1,
    author: "Елена",
    avatar: null,
    date: "2025-05-01T10:30:00",
    content: "Спасибо за создание форума! Надеюсь найти здесь много интересных тем для обсуждения.",
    likes: 12,
  },
  {
    id: 2,
    author: "Иван",
    avatar: null,
    date: "2025-05-01T11:45:00",
    content: "Форум выглядит очень перспективно. Буду рад принять участие в обсуждениях!",
    likes: 8,
  },
  {
    id: 3,
    author: "Ольга",
    avatar: null,
    date: "2025-05-01T13:20:00",
    content: "Хотелось бы узнать, планируются ли тематические разделы для обсуждения литературы и искусства?",
    likes: 5,
  },
];

const TopicPage = () => {
  const { id } = useParams();
  const [comments, setComments] = useState(commentsData);
  const [newComment, setNewComment] = useState("");

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, "dd.MM.yyyy HH:mm");
  };

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    
    const newCommentObj = {
      id: comments.length + 1,
      author: "Гость",
      avatar: null,
      date: new Date().toISOString(),
      content: newComment,
      likes: 0,
    };
    
    setComments([...comments, newCommentObj]);
    setNewComment("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto py-8 px-4">
        <div className="mb-4">
          <Link to="/" className="text-blue-600 hover:underline flex items-center">
            <Icon name="ChevronLeft" size={16} className="mr-1" />
            Вернуться к списку тем
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex justify-between items-start mb-3">
            <h1 className="text-2xl font-bold">{topicData.title}</h1>
            {topicData.isHot && <Badge className="bg-orange-500">Популярное</Badge>}
          </div>
          
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Icon name="User" size={14} className="mr-1" />
            <span>{topicData.author}</span>
            <span className="mx-2">•</span>
            <Icon name="Calendar" size={14} className="mr-1" />
            <span>{format(new Date(topicData.date), "dd.MM.yyyy")}</span>
            <span className="mx-2">•</span>
            <Icon name="Eye" size={14} className="mr-1" />
            <span>{topicData.views} просмотров</span>
            <span className="mx-2">•</span>
            <Badge variant="outline">{topicData.category}</Badge>
          </div>
          
          <Separator className="my-4" />
          
          <div className="prose max-w-none">
            <p>{topicData.content}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Комментарии ({comments.length})</h2>
          
          {comments.map((comment) => (
            <div key={comment.id} className="mb-6 pb-6 border-b border-gray-200 last:border-0">
              <div className="flex items-start">
                <Avatar className="mr-3">
                  <AvatarImage src={comment.avatar || ""} />
                  <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center mb-1">
                    <span className="font-medium mr-2">{comment.author}</span>
                    <span className="text-sm text-gray-500">{formatDate(comment.date)}</span>
                  </div>
                  <p className="text-gray-800">{comment.content}</p>
                  <div className="mt-2 flex items-center">
                    <Button variant="ghost" size="sm" className="text-gray-500 text-sm flex items-center gap-1">
                      <Icon name="ThumbsUp" size={14} />
                      <span>{comment.likes}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-500 text-sm flex items-center gap-1">
                      <Icon name="Reply" size={14} />
                      Ответить
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div className="mt-6">
            <h3 className="text-lg font-medium mb-3">Добавить комментарий</h3>
            <Textarea 
              placeholder="Введите ваш комментарий..." 
              className="mb-3" 
              rows={4}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <Button onClick={handleAddComment}>Отправить</Button>
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

export default TopicPage;
