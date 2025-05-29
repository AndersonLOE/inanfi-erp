import { Path, UseFormReturn } from 'react-hook-form';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

interface InputFormProps<T extends Record<string, unknown>> {
  form: UseFormReturn<T>;
  name: Path<T>;
  label?: string;
  description?: string;
  placeholder?: string;
  type?: string;
}

export function InputForm<T extends Record<string, unknown>>({
                                                               form,
                                                               name,
                                                               label,
                                                               description,
                                                               placeholder = '',
                                                               type = 'text',
                                                             }: InputFormProps<T>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label || String(name)}</FormLabel>
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} value={String(field.value)} />
          </FormControl>
          {description && (
            <FormDescription>{description}</FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}