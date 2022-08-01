
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CoreWebApi6.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }
        public string ?Name { get; set; }
        public decimal Price { get; set; }


        public ICollection<Sale> ?Sales { get; set; }
    }
}
