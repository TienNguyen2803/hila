import React from 'react';
import { 
  Search,
  Save,
  Copy,
  Send,
  FileText,
  Plus,
  Minus,
  AlertCircle
} from 'lucide-react';
import {
  Input,
  Select,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button,
  IconButton,
} from "@mui/material";

const About = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Tạo báo giá mới</h1>
        <div className="flex gap-2">
          <IconButton>
            <Save className="w-4 h-4" />
            Lưu nháp
          </IconButton>
          <Button className="flex items-center gap-2">
            <Send className="w-4 h-4" />
            Gửi báo giá
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Panel - Input Section */}
        <Card>
          <CardHeader>
            <Typography>Thông tin báo giá</Typography>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Customer Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Khách hàng</label>
              <div className="flex gap-2">
                <Select className="w-full">
                  <option>Chọn khách hàng</option>
                </Select>
                <IconButton >
                  <Plus className="w-4 h-4" />
                </IconButton>
              </div>
            </div>

            {/* Product Selection */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Sản phẩm/Dịch vụ</label>
              <Select className="w-full">
                <option>Chọn sản phẩm</option>
              </Select>
            </div>

            {/* Quantity Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Số lượng</label>
              <div className="flex items-center gap-2">
              <IconButton >
                  <Minus className="w-4 h-4" />
                </IconButton>
                <Input type="number" defaultValue="1" className="text-center" />
                <IconButton >
                  <Plus className="w-4 h-4" />
                </IconButton>
              </div>
            </div>

            {/* Delivery Location */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Địa điểm giao hàng</label>
              <Select className="w-full">
                <option>Chọn địa điểm</option>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Right Panel - Cost Breakdown */}
        <Card>
          <CardHeader>
            <Typography>Chi tiết chi phí</Typography>
          </CardHeader>
          <CardContent>
            {/* Cost Breakdown Table */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 p-2 hover:bg-gray-50">
                <span className="text-sm">Giá niêm yết:</span>
                <span className="text-sm font-medium text-right">$1000.00</span>
              </div>
              <div className="grid grid-cols-2 gap-4 p-2 hover:bg-gray-50">
                <span className="text-sm">Phí đơn hàng tối thiểu:</span>
                <span className="text-sm font-medium text-right">$50.00</span>
              </div>
              <div className="grid grid-cols-2 gap-4 p-2 hover:bg-gray-50">
                <span className="text-sm">Thuế nhập khẩu:</span>
                <span className="text-sm font-medium text-right">$100.00</span>
              </div>
              <div className="grid grid-cols-2 gap-4 p-2 hover:bg-gray-50">
                <span className="text-sm">Cước vận chuyển quốc tế:</span>
                <span className="text-sm font-medium text-right">$200.00</span>
              </div>
              <div className="grid grid-cols-2 gap-4 p-2 hover:bg-gray-50">
                <span className="text-sm">Phí đóng gói:</span>
                <span className="text-sm font-medium text-right">$30.00</span>
              </div>
              <div className="grid grid-cols-2 gap-4 p-2 hover:bg-gray-50">
                <span className="text-sm">Phí vận chuyển nội địa:</span>
                <span className="text-sm font-medium text-right">$20.00</span>
              </div>
              <div className="grid grid-cols-2 gap-4 p-2 hover:bg-gray-50">
                <span className="text-sm">Lợi nhuận (10%):</span>
                <span className="text-sm font-medium text-right">$140.00</span>
              </div>

              {/* Total Price */}
              <div className="border-t pt-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <span className="text-lg font-bold">Tổng giá bán:</span>
                  <span className="text-lg font-bold text-right text-green-600">$1,540.00</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 mt-6">
                <IconButton >
                  <Copy className="w-4 h-4" />
                  Sao chép giá
                </IconButton>
                <IconButton >
                  <FileText className="w-4 h-4" />
                  Xuất PDF
                </IconButton>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;