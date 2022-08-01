using System.ComponentModel.DataAnnotations;

namespace CoreWebApi6.Models
{
    public class Sale
    {

        [Key]
        public int Id { get; set; }
        public int ProductId { get; set; }
        public int CustomerId { get; set; }
        public int StoreId { get; set; }
        public DateTime DateSold { get; set; }


        //one sale can have can only have one product
        public Product ?Product { get; set; }
        //one sale can have can only have one customer
        public Customer ?Customer { get; set; }
        //one sale can have can only have one store
        public Store ?Store { get; set; }
    }
}
