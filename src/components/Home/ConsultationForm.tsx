
import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  TextField, 
  Button, 
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Alert,
  Snackbar
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { ConsultationForm } from '@/types';

const initialFormState: ConsultationForm = {
  name: '',
  phone: '',
  serviceInterested: '',
};

const FormSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundImage: 'linear-gradient(to right, #f5f7fa, #c3cfe2)',
}));

const FormPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: 16,
  boxShadow: '0 8px 40px rgba(0, 0, 0, 0.12)',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(6),
  },
}));

const ConsultationFormComponent = () => {
  const [formData, setFormData] = useState<ConsultationForm>(initialFormState);
  const [errors, setErrors] = useState<Partial<ConsultationForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const serviceOptions = [
    'Aromatherapy Massage',
    'Hot Stone Therapy',
    'Facial Treatment',
    'Body Scrub',
    'Manicure & Pedicure',
    'Hair Treatment',
    'Other'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field if it exists
    if (errors[name as keyof ConsultationForm]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    setFormData(prev => ({ ...prev, serviceInterested: e.target.value }));
    if (errors.serviceInterested) {
      setErrors(prev => ({ ...prev, serviceInterested: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ConsultationForm> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10,15}$/.test(formData.phone.replace(/[-()\s]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.serviceInterested) {
      newErrors.serviceInterested = 'Please select a service';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setFormData(initialFormState);
        setIsSubmitting(false);
        setShowSuccess(true);
      }, 1500);
    }
  };

  const handleCloseSnackbar = () => {
    setShowSuccess(false);
  };

  return (
    <FormSection>
      <Container>
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom
          sx={{ 
            textAlign: 'center',
            fontWeight: 'bold',
            mb: 5
          }}
        >
          Get a Free Consultation
        </Typography>
        
        <FormPaper>
          <form onSubmit={handleSubmit}>
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                label="Your Name"
                name="name"
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                required
              />
            </Box>
            
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                variant="outlined"
                value={formData.phone}
                onChange={handleChange}
                error={!!errors.phone}
                helperText={errors.phone}
                required
                placeholder="e.g., 1234567890"
              />
            </Box>
            
            <Box sx={{ mb: 4 }}>
              <FormControl fullWidth error={!!errors.serviceInterested}>
                <InputLabel id="service-interested-label">Service Interested In</InputLabel>
                <Select
                  labelId="service-interested-label"
                  id="service-interested"
                  value={formData.serviceInterested}
                  label="Service Interested In"
                  onChange={handleSelectChange}
                  required
                >
                  {serviceOptions.map((service) => (
                    <MenuItem key={service} value={service}>
                      {service}
                    </MenuItem>
                  ))}
                </Select>
                {errors.serviceInterested && (
                  <Typography variant="caption" color="error" sx={{ mt: 0.5, ml: 1.5 }}>
                    {errors.serviceInterested}
                  </Typography>
                )}
              </FormControl>
            </Box>
            
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              disabled={isSubmitting}
              sx={{ py: 1.5 }}
            >
              {isSubmitting ? 'Submitting...' : 'Request Consultation'}
            </Button>
          </form>
        </FormPaper>
      </Container>
      
      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Your consultation request has been submitted successfully. We'll contact you soon!
        </Alert>
      </Snackbar>
    </FormSection>
  );
};

export default ConsultationFormComponent;
import React, { useState } from 'react';
import { Box, Typography, Container, TextField, Button, Paper, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ConsultationForm as ConsultationFormType } from '../../types';

const FormSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.grey[50],
}));

const FormPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: 600,
  margin: '0 auto',
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(6),
  },
}));

const ConsultationForm = () => {
  const [formData, setFormData] = useState<ConsultationFormType>({
    name: '',
    phone: '',
    serviceInterested: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const services = [
    'Massage Therapy',
    'Facial Treatment',
    'Body Scrub',
    'Aromatherapy',
    'Manicure & Pedicure',
    'Hair Treatment',
    'Other'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    setFormData({
      ...formData,
      serviceInterested: e.target.value
    });
    
    // Clear error when user selects
    if (errors.serviceInterested) {
      setErrors({
        ...errors,
        serviceInterested: ''
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formData.serviceInterested) {
      newErrors.serviceInterested = 'Please select a service';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would send the data to your backend
      console.log('Form submitted:', formData);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        phone: '',
        serviceInterested: ''
      });
      
      // Show success message (you could use a snackbar or other notification)
      alert('Thank you for your interest! We will contact you shortly.');
    }
  };

  return (
    <FormSection>
      <Container>
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom
          sx={{ 
            textAlign: 'center',
            fontWeight: 'bold',
            mb: 5
          }}
        >
          Get a Free Consultation
        </Typography>
        
        <FormPaper>
          <form onSubmit={handleSubmit}>
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                label="Your Name"
                name="name"
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                required
              />
            </Box>
            
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                variant="outlined"
                value={formData.phone}
                onChange={handleChange}
                error={!!errors.phone}
                helperText={errors.phone}
                required
                placeholder="e.g., 1234567890"
              />
            </Box>
            
            <Box sx={{ mb: 4 }}>
              <FormControl fullWidth error={!!errors.serviceInterested}>
                <InputLabel id="service-interested-label">Service Interested In</InputLabel>
                <Select
                  labelId="service-interested-label"
                  id="serviceInterested"
                  value={formData.serviceInterested}
                  label="Service Interested In"
                  onChange={handleSelectChange}
                  required
                >
                  {services.map((service) => (
                    <MenuItem key={service} value={service}>
                      {service}
                    </MenuItem>
                  ))}
                </Select>
                {errors.serviceInterested && (
                  <Typography variant="caption" color="error">
                    {errors.serviceInterested}
                  </Typography>
                )}
              </FormControl>
            </Box>
            
            <Button 
              type="submit" 
              variant="contained" 
              color="primary" 
              size="large" 
              fullWidth
              sx={{ py: 1.5 }}
            >
              Request Consultation
            </Button>
          </form>
        </FormPaper>
      </Container>
    </FormSection>
  );
};

export default ConsultationForm;
