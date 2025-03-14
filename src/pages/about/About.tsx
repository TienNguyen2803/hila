
import { Box, Button, Card, CardContent, CardHeader, IconButton, Select, Typography } from '@mui/material';
import { Save, Send, Plus, Copy, FileText } from 'lucide-react';
import { styled } from '@mui/material/styles';

const Container = styled(Box)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
`;

const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #1a2138;
  color: white;
  &:hover {
    background-color: #2a314f;
  }
`;

const StyledIconButton = styled(IconButton)`
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid #e0e0e0;
  padding: 8px 16px;
  border-radius: 8px;
  color: #1a2138;
`;

const GridContainer = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`;

const FormGroup = styled(Box)`
  margin-bottom: 16px;
`;

const Label = styled('label')`
  display: block;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const About = () => {
  return (
    <Container>
      <Header>
        <Typography variant="h5" fontWeight="bold">Tạo báo giá mới</Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <StyledIconButton>
            <Save size={16} />
            Lưu nháp
          </StyledIconButton>
          <StyledButton>
            <Send size={16} />
            Gửi báo giá
          </StyledButton>
        </Box>
      </Header>

      <GridContainer>
        <Card>
          <CardHeader title="Thông tin báo giá" />
          <CardContent>
            <FormGroup>
              <Label>Khách hàng</Label>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Select
                  native
                  fullWidth
                  sx={{ bgcolor: 'white' }}
                >
                  <option>Chọn khách hàng</option>
                </Select>
                <StyledIconButton>
                  <Plus size={16} />
                </StyledIconButton>
              </Box>
            </FormGroup>

            <FormGroup>
              <Label>Sản phẩm/Dịch vụ</Label>
              <Select
                native
                fullWidth
                sx={{ bgcolor: 'white' }}
              >
                <option>Chọn sản phẩm</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>Số lượng</Label>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Button variant="outlined">-</Button>
                <input type="text" value="1" style={{ 
                  width: '100%', 
                  textAlign: 'center',
                  padding: '8px',
                  border: '1px solid #e0e0e0',
                  borderRadius: '4px'
                }} />
                <Button variant="outlined">+</Button>
              </Box>
            </FormGroup>

            <FormGroup>
              <Label>Địa điểm giao hàng</Label>
              <Select
                native
                fullWidth
                sx={{ bgcolor: 'white' }}
              >
                <option>Chọn địa điểm</option>
              </Select>
            </FormGroup>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Chi tiết chi phí" />
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography>Giá niêm yết:</Typography>
              <Typography>$1000.00</Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography>Phí đơn hàng tối thiểu:</Typography>
              <Typography>$50.00</Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography>Thuế nhập khẩu:</Typography>
              <Typography>$100.00</Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography>Cước vận chuyển quốc tế:</Typography>
              <Typography>$200.00</Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography>Phí đóng gói:</Typography>
              <Typography>$30.00</Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography>Phí vận chuyển nội địa:</Typography>
              <Typography>$20.00</Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography>Lợi nhuận (10%):</Typography>
              <Typography>$140.00</Typography>
            </Box>

            <Box sx={{ 
              borderTop: '1px solid #e0e0e0',
              pt: 2,
              mt: 2,
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <Typography variant="h6" fontWeight="bold">Tổng giá bán:</Typography>
              <Typography variant="h6" fontWeight="bold" color="success.main">$1,540.00</Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
              <StyledIconButton>
                <Copy size={16} />
                Sao chép giá
              </StyledIconButton>
              <StyledIconButton>
                <FileText size={16} />
                Xuất PDF
              </StyledIconButton>
            </Box>
          </CardContent>
        </Card>
      </GridContainer>
    </Container>
  );
};

export default About;
