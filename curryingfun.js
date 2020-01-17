function volume(l)
{
    return function(b)
    {
        return function(h)
        {
            return l*b*h
        }
    }

}
test=volume(100)
fun=test(90)
console.log(fun(50))