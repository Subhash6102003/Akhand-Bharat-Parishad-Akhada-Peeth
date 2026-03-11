# Razorpay Integration Setup Guide

## Overview
Your NGO website now has Razorpay payment integration for accepting secure donations.

## Quick Start

### 1. Get Razorpay Account
1. Visit [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Sign up or log in to your account
3. Complete KYC verification (required for live payments)

### 2. Get API Keys

#### For Testing (Test Mode)
1. Go to [API Keys](https://dashboard.razorpay.com/app/keys)
2. Under "Test Mode", copy your **Key ID** (starts with `rzp_test_`)
3. Replace `rzp_test_YourTestKeyHere` in `src/pages/Donate.tsx` (line 32)

#### For Production (Live Mode)
1. Complete KYC verification
2. Switch to "Live Mode" in dashboard
3. Copy your **Live Key ID** (starts with `rzp_live_`)
4. Replace the test key with your live key

### 3. Update the Code
Open `src/pages/Donate.tsx` and find line 32:
```typescript
key: 'rzp_test_YourTestKeyHere', // Replace this
```

Replace with your actual Razorpay Key ID:
```typescript
key: 'rzp_test_ABC123XYZ', // Your test key
// OR for production:
key: 'rzp_live_ABC123XYZ', // Your live key
```

### 4. Test Payments

#### Test Mode Cards
Use these test cards in Test Mode:
- **Successful Payment**: 4111 1111 1111 1111
- **Failed Payment**: 4000 0000 0000 0002
- CVV: Any 3 digits
- Expiry: Any future date

#### Test UPI
- Use any UPI ID like `success@razorpay`
- OTP: Will be auto-filled in test mode

### 5. Features Implemented

✅ **Secure Payment Gateway** - PCI DSS compliant
✅ **Multiple Payment Methods**
   - Credit/Debit Cards
   - UPI (Google Pay, PhonePe, Paytm)
   - Net Banking
   - Wallets

✅ **Quick Donation Amounts** - ₹500, ₹1000, ₹2500, or custom
✅ **Form Validation** - Email, phone, name required
✅ **Loading States** - User feedback during payment
✅ **Error Handling** - Payment failures handled gracefully
✅ **Mobile Responsive** - Works on all devices

### 6. Backend Integration (Optional but Recommended)

For production, you should:
1. Create a backend API to generate orders
2. Verify payment signatures on server
3. Store donation records in database

Example backend flow:
```
Frontend → Create Order API → Razorpay → Payment → Verify Signature → Save to DB
```

#### Why Backend?
- **Security**: Secret keys never exposed to frontend
- **Verification**: Confirm payment authenticity
- **Records**: Track all donations
- **Receipts**: Send automated email receipts

### 7. Webhook Setup (Recommended)

1. Go to [Webhooks](https://dashboard.razorpay.com/app/webhooks)
2. Add your webhook URL: `https://yoursite.com/api/razorpay-webhook`
3. Select events:
   - `payment.captured`
   - `payment.failed`
4. Copy webhook secret for signature verification

### 8. Go Live Checklist

- [ ] Complete Razorpay KYC verification
- [ ] Replace test key with live key
- [ ] Test with real payment (small amount)
- [ ] Set up backend verification (recommended)
- [ ] Configure webhooks
- [ ] Enable 80G tax certificate generation
- [ ] Test on mobile devices
- [ ] Update payment confirmation emails

### 9. Tax Benefits (80G)

To provide 80G tax certificates:
1. Register your NGO's 80G certificate with Razorpay
2. Contact Razorpay support to enable auto-receipts
3. Donors will receive certificates automatically

### 10. Transaction Fees

Razorpay charges:
- **2% + GST** for domestic transactions
- No setup fees
- No annual maintenance fees

### 11. Support

**Razorpay Support:**
- Email: support@razorpay.com
- Phone: +91-7406661234
- Docs: https://razorpay.com/docs/

**Payment Issues:**
- Check browser console for errors
- Ensure Razorpay script loads (check Network tab)
- Verify key format (must start with `rzp_test_` or `rzp_live_`)

### 12. Current Status

🟡 **Test Mode Active** - Using placeholder test key
- Functional but needs your actual Razorpay key
- Replace key in `Donate.tsx` line 32

## Security Best Practices

1. ✅ Never commit API keys to Git (use environment variables)
2. ✅ Use live keys only in production
3. ✅ Implement backend verification
4. ✅ Enable HTTPS for your website
5. ✅ Regularly update dependencies

## Next Steps

1. **Immediate**: Replace test key with your Razorpay test key
2. **Testing**: Test donations in test mode
3. **Production**: Complete KYC and switch to live key
4. **Enhanced**: Set up backend API for verification
