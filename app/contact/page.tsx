import { sendEmail } from '@/actions/sendEmail';
import PageHeader from '@/components/page-header';
import { SubmitButton } from '@/components/submit-button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';

const ContactPage = () => {
  return (
    <div className="flex flex-col h-screen p-24">
      <PageHeader>Contact</PageHeader>
      <div className="flex flex-col items-center justify-center h-full">
        <Card className="w-full sm:w-1/2 md:w-1/3">
          <form action={sendEmail}>
            <CardHeader>
              <CardTitle>Contact</CardTitle>
              <CardDescription>
                Please contact me directly at{' '}
                <a className="underline" href="mailto:astraight9409@sdsu.edu">
                  AlexStraight619@gmail.com
                </a>{' '}
                or through this form.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="senderEmail"
                  placeholder="youremail@gmail.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message here"
                />
              </div>
            </CardContent>
            <CardFooter>
              <SubmitButton>Send</SubmitButton>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;
