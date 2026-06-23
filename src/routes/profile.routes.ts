import { Router } from 'express';
import { prisma } from '../config/db.js';
const router = Router();

// Endpoint para crear un perfil (Paciente/Cuidador/Admin)
router.post('/profiles', async (req, res) => {
  try {
    const { id, email, fullName, phoneNumber, role } = req.body;

    const newProfile = await prisma.profile.create({
      data: {
        id, // El UUID que viene desde Supabase Auth en la App móvil
        email,
        fullName,
        phoneNumber,
        role // 'PATIENT', 'CAREGIVER' o 'ADMIN'
      },
    });

    res.status(201).json({ success: true, data: newProfile });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;