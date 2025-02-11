import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const plans = Array.from({ length: 9 }, () => ({
  name: "Lorem ipsum dolor",
  date: new Date(+new Date() - Math.floor(Math.random() * 1000000000)).toLocaleDateString(),
}));

export const RemediationPlanTable = () => {
  return (
    <Table>
      <TableBody>
        {plans.map((plan, index) => (
          <TableRow className="border-0" key={index}>
            <TableCell>{plan.name}</TableCell>
            <TableCell>{plan.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
