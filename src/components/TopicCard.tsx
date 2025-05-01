
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export interface TopicProps {
  id: number;
  title: string;
  author: string;
  date: string;
  replies: number;
  views: number;
  category: string;
  isNew?: boolean;
  isHot?: boolean;
}

const TopicCard = ({ id, title, author, date, replies, views, category, isNew, isHot }: TopicProps) => {
  return (
    <Card className="mb-3 transition-all hover:bg-gray-50">
      <Link to={`/topic/${id}`} className="block">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <CardTitle className="text-lg font-medium flex items-center gap-2">
              {title}
              {isNew && <Badge className="ml-2 bg-blue-500">Новое</Badge>}
              {isHot && <Badge className="ml-2 bg-orange-500">Популярное</Badge>}
            </CardTitle>
            <Badge variant="outline">{category}</Badge>
          </div>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="flex items-center text-sm text-gray-500">
            <Icon name="User" size={14} className="mr-1" />
            <span>{author}</span>
            <span className="mx-2">•</span>
            <Icon name="Calendar" size={14} className="mr-1" />
            <span>{date}</span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between pt-0 text-sm text-gray-500">
          <div className="flex items-center">
            <Icon name="MessageSquare" size={14} className="mr-1" />
            <span>{replies} ответов</span>
          </div>
          <div className="flex items-center">
            <Icon name="Eye" size={14} className="mr-1" />
            <span>{views} просмотров</span>
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default TopicCard;
