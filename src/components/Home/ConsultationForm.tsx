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
import { ConsultationForm as ConsultationFormType } from '../../types';

const initialFormState: ConsultationFormType = {
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

const ConsultationForm = () => {
  const [formData, setFormData] = useState<ConsultationFormType>(initialFormState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form
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

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit form
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData(initialFormState);
    }, 1500);
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
                  {services.map((service) => (
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

export default ConsultationForm;