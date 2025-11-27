import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';

interface CheckoutProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  description?: string;
  onClose?: () => void;
}

export default function PopupCheckout({
  open,
  setOpen,
  title,
  description,
  onClose,
}: CheckoutProps) {
  const router = useRouter();

  function handleOpenChange(value: boolean) {
    setOpen(value);
    if (!value && onClose) {
      onClose(); // <-- CALL when popup closes
    }
  }

  function handleContinueShoping() {
    setOpen(false);
    if (onClose) onClose();
    router.push('/products');
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md rounded-2xl shadow-xl">
        <DialogHeader className="text-center">
          <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-3" />
          <DialogTitle className="text-2xl font-bold text-foreground">
            {title}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {description}
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="sm:justify-start">
          <Button
            onClick={handleContinueShoping}
            className="text-primary-foreground shadow-md"
          >
            Continue Shopping
          </Button>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
