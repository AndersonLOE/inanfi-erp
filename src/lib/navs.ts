import { Boxes, Cross, Fingerprint, Landmark, LayoutDashboard, ScanHeart, SquareChartGantt } from 'lucide-react';

export const navigation = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  modules: [
    {
      name: 'Salud.',
      logo: Cross,
    },
    {
      name: 'Logística',
      logo: Boxes,
    },
    {
      name: 'Contabilidad',
      logo: Landmark,
    },
  ],
  navMain: [
    {
      title: 'Dashboard',
      url: '/salud/dashboard',
      icon: LayoutDashboard,
    },
    {
      title: 'Clínica',
      url: '/clinica',
      icon: Fingerprint,
      isActive: true,
      items: [
        {
          title: 'Pacientes',
          url: '/salud/pacientes',
        },
      ],
    },
    {
      title: 'Atencion',
      url: '/atencion',
      icon: ScanHeart,
      isActive: true,
      items: [
        {
          title: 'Consultas',
          url: '/salud/consultas',
        }
      ],
    },
    {
      title: 'Analisis',
      url: '/analisis',
      icon: SquareChartGantt,
      isActive: false,
      items: [
        {
          title: 'Reportes',
          url: '/salud/reportes',
        },
      ],
    },
  ],
}