'use client';

import { useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const initialOptions = {
  clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID ?? "",
  currency: "USD",
  intent: "subscription",
  vault: true,
} as const;

interface PayPalSubscribeButtonProps {
  onSuccess?: () => void;
}

export default function PayPalSubscribeButton({ onSuccess }: PayPalSubscribeButtonProps) {
  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons 
        style={{
          layout: 'vertical',
          color: 'blue',
          shape: 'rect',
          label: 'subscribe'
        }}
        createSubscription={(data, actions) => {
          return actions.subscription.create({
            'plan_id': process.env.NEXT_PUBLIC_PAYPAL_PLAN_ID ?? ""
          });
        }}
        onApprove={async (data) => {
          console.log('Subscription successful!', data.subscriptionID);
          onSuccess?.();
          return Promise.resolve();
        }}
      />
    </PayPalScriptProvider>
  );
}
