import { DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import ProductCarousel from './ProductCarousel';
import Link from 'next/link'

export default function ProductDetailModal({ product }: { product: any }) {
  return (
    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6 place-items-center">
        <div>
          <ProductCarousel images={product.images} productName={product.name} />
        </div>
        <div className="space-y-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-green-800">{product.name}</DialogTitle>
            <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-green-100 text-green-800">{product.category}</Badge>      
            </div>
            <DialogDescription className="text-lg text-gray-600">
              {product.description}
            </DialogDescription>
          </DialogHeader>
          <div className="flex space-x-4 items-center justify-center">
            <Link href='' target='_blank'>
              <Button className="flex-1 bg-green-600 hover:bg-green-700">
                Consultar por WhatsApp
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </DialogContent>
  );
}
