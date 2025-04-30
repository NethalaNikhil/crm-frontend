"use client"; // ✅ Enables React hooks and client-only libraries like MUI and ApexCharts

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Box, Typography, Card, CardContent } from "@mui/material";

// ✅ Dynamically import ApexCharts to prevent SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function DashboardPage() {
  const [chartData] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May"]
      }
    },
    series: [
      {
        name: "Leads",
        data: [30, 40, 45, 50, 49]
      }
    ]
  });

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Card sx={{ maxWidth: 800, marginTop: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Monthly Leads
          </Typography>
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="bar"
            width="100%"
            height={350}
          />
        </CardContent>
      </Card>
    </Box>
  );
}
