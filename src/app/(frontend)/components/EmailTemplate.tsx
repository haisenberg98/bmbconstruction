import * as React from 'react';

interface EmailTemplateProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  formData,
}) => (
  <div>
    <p>Name :{formData.name}</p>
    <p>Email :{formData.email}</p>
    <p>Phone :{formData.phone}</p>
    <p>Message :{formData.message}</p>
  </div>
);
