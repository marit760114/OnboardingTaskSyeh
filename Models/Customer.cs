using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace CoreWebApi6.Models
{
    public class Customer
    {
        [Key]
        public int Id { get; set; }
        public string? Name { get; set; }
        public string ?Address { get; set; }

        public ICollection<Sale> ?Sales { get; set; }
    }
}
