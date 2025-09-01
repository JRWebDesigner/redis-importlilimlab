import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';

export default function SearchAndFilterBar({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories,
  filteredProductsCount
}: {
  searchTerm: string;
  setSearchTerm: (v: string) => void;
  selectedCategory: string;
  setSelectedCategory: (v: string) => void;
  categories: string[];
  filteredProductsCount: number;
}) {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full border-green-200 focus:border-green-500 focus:ring-green-500"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-gray-600" />
          <span className="text-sm font-medium text-gray-700">Filtrar por:</span>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "bg-green-600 hover:bg-green-700 text-white" 
                  : "border-green-600 text-green-600 hover:bg-green-50"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-gray-600">
          {filteredProductsCount === 0 
            ? "No se encontraron productos que coincidan con tu búsqueda" 
            : `Mostrando ${filteredProductsCount} producto${filteredProductsCount !== 1 ? 's' : ''}`
          }
        </p>
      </div>
    </>
  );
}