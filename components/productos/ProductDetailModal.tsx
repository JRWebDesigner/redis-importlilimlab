import { DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import ProductCarousel from './ProductCarousel';
import Link from 'next/link'

export default function ProductDetailModal({ product }: { product: any }) {
  return (
    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-green-800">{product.name}</DialogTitle>
        <DialogDescription className="text-lg text-gray-600">
          {product.description}
        </DialogDescription>
      </DialogHeader>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
        <div>
          <ProductCarousel images={product.images} productName={product.name} />
        </div>
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <Badge className="bg-green-100 text-green-800">{product.category}</Badge>
              
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Características Principales</h4>
            <ul className="space-y-2">
              {product.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          {/*<div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Especificaciones Técnicas</h4>
            <div className="bg-gray-50 rounded-lg p-4">
              <dl className="space-y-2">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <dt className="font-medium text-gray-700">{key}:</dt>
                    <dd className="text-gray-600">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div> */}
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
