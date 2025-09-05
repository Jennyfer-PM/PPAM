import java.util.Scanner;

class inicioPAM 
{
   public void Reglamento ()
    {
        System.out.println("\nREGLAMENTO POO\n");
        System.out.println("1.- Respeto \n2.- Importante participación activa en clase \n3.- No entregar trabajos incompletos");
        System.out.println("4.- No se aplica examen fuera de tiempo \n5.- Plagio de trabajos = 0 para todos");
        System.out.println("6.- 3 faltas = Final del parcial \n7.- Calificación Máxima en el final 8");
    }

    public void Lineamientos ()
    {
        System.out.println("\nLINEAMIENTOS CLASSROOM\n");
        System.out.println("Entregar los trbajos para su revisión");
        System.out.println("Entregas en PDF"); 
        System.out.println("Avisos de Clase "); 
        System.out.println("Entregas autorizadas con retraso, 5 Calif Max");
    }

    public void Fechas ()
    {
        System.out.println("\nFECHAS DE PARCIALES\n");
        System.out.println("Parcial 1: 29 de Septiembre del 2025");
        System.out.println("Parcial 2: 03 de Noviembre del 2025");
        System.out.println("Parcial 3: 01 de Diciembre del 2025");
        System.out.println("Final: 08 de Diciembre del 2025");
    }

    public void Porcentajes ()
    {
        System.out.println("\nPORCENTAJES POR PARCIAL\n");
        System.out.println("Conocimiento Parcial 1: 40%  Parcial 2: 40%  Parcial 3: 20%");
        System.out.println("Desempeño    Parcial 1: 20%  Parcial 2: 20%  Parcial 3: 10%");
        System.out.println("Producto     Parcoal 1: 30%  Parcial 2: 20%  Parcial 3: 40%");
        System.out.println("P.I.         Parcial 1: 10%  Parcial 2: 20%  Parcial 3: 30%");
    }
}

public class Consulta_Informacion
{
    public static void main(String[] args)
    {
        Scanner teclado = new Scanner(System.in);

        inicioPAM info = new inicioPAM();

        int opcion;

        do
        {
            System.out.println("\nCONSULTAR INFORMACIÓN DE LA MATERIA: \n");
            System.out.println("1.- Reglamento POO");
            System.out.println("2.- Lineamientos de Classroom");
            System.out.println("3.- Fechas de los Parciales");
            System.out.println("4.- Porcentajes por Parcial");
            System.out.println("Seleccione una opcion: ");
            opcion = teclado.nextInt();
            switch (opcion) 
            {
                case 1:
                    info.Reglamento();
                    break;
                case 2:
                    info.Lineamientos();
                    break;
                case 3:
                    info.Fechas();
                    break;
                case 4:
                    info.Porcentajes();
                    break;
                case 5:
                    System.out.println("CONSULTA FINALIZADA");
                default:
                    break;
            }

        } while (opcion != 5);
        teclado.close();
    }
}
