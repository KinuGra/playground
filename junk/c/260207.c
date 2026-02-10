#include <stdio.h>

int main()
{
  int i1, i2, i3;
  printf("i1は %d byte\n", sizeof(i1));
  printf("%p\n", &i1);
  printf("%p\n", &i2);
  printf("%p\n", &i3);
}
