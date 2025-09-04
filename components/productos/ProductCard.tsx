import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { CheckCircle } from 'lucide-react';
import ProductDetailModal from './ProductDetailModal';

export default function ProductCard({ product }: { product: any }) {
  return (
    <Card className="hover:shadow-xl transition-shadow duration-300 h-full">
      <CardHeader>
        <div className="h-[250px] bg-gray-100 rounded-lg overflow-hidden mb-4">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center justify-between">
          <Badge className="bg-green-100 text-green-800">{product.category}</Badge>
        </div>
        <CardTitle className="text-xl text-gray-900">{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full bg-green-600 hover:bg-green-700">
              Ver Detalles Completos
            </Button>
          </DialogTrigger>
          <ProductDetailModal product={product} />
        </Dialog>
      </CardContent>
    </Card>
  );
}
