import { sendEmail } from '@/actions/sendEmail';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-24">
      <Card className="w-full sm:w-1/2 md:w-1/3">
        <CardHeader>
          <CardTitle>Contact</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-y-2 " action={sendEmail}>
            <Input name="senderEmail" />
            <Textarea name="message" />
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactPage;
