import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

export default function ProductCategoryCard({ product }: { product: any }) {
  const IconComponent = product.icon;
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 border-green-100 hover:border-green-300 h-full">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <IconComponent className="w-8 h-8 text-green-600" />
        </div>
        <CardTitle className="text-green-800">{product.category}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {product.items.map((item: string, itemIndex: number) => (
            <li key={itemIndex} className="flex items-center text-sm text-gray-600">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <Button variant="outline" className="w-full mt-4 border-green-600 text-green-600 hover:bg-green-50">
          Ver Productos
        </Button>
      </CardContent>
    </Card>
  );
}