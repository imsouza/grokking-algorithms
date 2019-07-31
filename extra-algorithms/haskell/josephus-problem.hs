jp :: Int -> Int -> Int
jp 1 _ = 1
jp n k = (mod ((jp (n - 1) k) + k - 1) n) + 1
